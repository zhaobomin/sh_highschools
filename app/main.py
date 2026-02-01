import os
from pathlib import Path

from flask import Flask, send_from_directory
from flask_cors import CORS

from app.api.v1 import api_v1_bp
from app.core.exceptions import CustomException, handle_custom_exception, handle_generic_exception


FRONTEND_DIR = Path(__file__).resolve().parent.parent / "dist"


def create_app() -> Flask:
    app = Flask(__name__)

    CORS(app, supports_credentials=True)

    app.register_blueprint(api_v1_bp)
    app.register_error_handler(CustomException, handle_custom_exception)
    app.register_error_handler(Exception, handle_generic_exception)

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_frontend(path: str):
        if path:
            target_path = FRONTEND_DIR / path
            if target_path.exists():
                return send_from_directory(FRONTEND_DIR, path)
        index_path = FRONTEND_DIR / "index.html"
        if index_path.exists():
            return send_from_directory(FRONTEND_DIR, "index.html")
        raise RuntimeError("Frontend build not found. Run `npm run build` in the frontend directory.")

    return app


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    create_app().run(host="0.0.0.0", port=port, debug=True)

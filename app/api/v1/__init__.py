from flask import Blueprint

from app.api.v1 import auth, filter as filter_module, schools, mocks  # noqa: F401

api_v1_bp = Blueprint("api_v1", __name__, url_prefix="/api/v1")
api_v1_bp.register_blueprint(auth.auth_bp)
api_v1_bp.register_blueprint(schools.schools_bp)
api_v1_bp.register_blueprint(filter_module.filter_bp)
api_v1_bp.register_blueprint(mocks.mocks_bp)

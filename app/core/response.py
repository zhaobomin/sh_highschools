from typing import Any, Dict, Optional


def api_response(data: Any = None, meta: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    response: Dict[str, Any] = {"data": data}
    if meta is not None:
        response["meta"] = meta
    return response

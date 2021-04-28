export const Status = {
    OK: { status_code: 200, message: "Success" },
    BAD_REQUEST: { status_code: 400, message: "Bad Request" },
    UNAUTHORIZED: { status_code: 401, message: "Unauthorized" },
    FORBIDDEN: { status_code: 403, message: "Forbidden" },
    NOT_FOUND: { status_code: 404, message: "Not Found" },
    UNSUPPORTED_ACTION: { status_code: 405, message: "Unsupported Action" },
    VALIDATION_FAILED: { status_code: 422, message: "Validation Failed" },
    SERVER_ERROR: { status_code: 500, message: "Internal Server Error" }
};
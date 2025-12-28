class APIRES {
  constructor(status, message, data, success) {
    (this.status = status),
      (this.message = message),
      (this.data = data),
      (this.success = true);
  }
}

export { APIRES };

export interface ResponseEntity<T> {
    timeStamp?: string;
    message?:   string;
    code?:      number;
    status?:    string;
    data?:      Object | T;
    error?:     string;
  }
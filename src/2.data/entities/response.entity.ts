export interface ResponseEntity {
    timeStamp?: string;
    message?:   string;
    code?:      number;
    status?:    string;
    data?:      Object ;
    error?:     string;
  }
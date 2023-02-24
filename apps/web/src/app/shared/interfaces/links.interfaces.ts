export interface CreateLinkRequest {
  title?: string;
  user?: unknown;
  url: string;
}

export interface Link {
  id: string;
  title?: string;
  user?: unknown;
  url: string;
  code: string;
  createTimeStamp: Date;
}

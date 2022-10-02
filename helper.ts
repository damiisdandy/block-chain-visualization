import { createHash } from "crypto";

export const hasher = (data: string[]) => createHash("sha256")
  .update(data.reduce((a, b) => a + b, ""))
  .digest("hex");
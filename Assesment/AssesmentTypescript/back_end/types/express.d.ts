// types/express.d.ts
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string; // Adjust according to your JWT payload structure
        // Add other properties if necessary
      };
    }
  }
}

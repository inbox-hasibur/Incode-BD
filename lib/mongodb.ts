// lib/mongodb.ts
// Cached MongoDB client promise for Next.js App Router & Server Actions

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  // If not configured yet, don't crash app during launchpad phase
  // It will throw when someone explicitly attempts a database query
  clientPromise = Promise.reject(
    new Error("Please add your MONGODB_URI to .env.local")
  );
} else {
  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri!, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri!, options);
    clientPromise = client.connect();
  }
}

export default clientPromise;

-- Add UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Add LTREE extension
CREATE EXTENSION IF NOT EXISTS "ltree";

-- Статьи проекта

CREATE TABLE IF NOT EXISTS "articles" (
  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  "slug" varchar NOT NULL UNIQUE,
  "name" varchar NOT NULL,
  "content" text NOT NULL,
  "pid" ltree,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "keywords" varchar NOT NULL,
  "createdAt" timestamp NOT NULL default(now()),
  "updatedAt" timestamp NOT NULL default(now())
);

CREATE INDEX pid_gist_idx ON articles USING GIST (pid);
CREATE INDEX pid_btree_idx ON articles USING BTREE (pid);

ALTER TABLE "watchlist_item" ADD COLUMN "id" serial PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "watchlist_item" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;
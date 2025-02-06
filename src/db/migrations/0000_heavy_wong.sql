CREATE TABLE "movies" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"overview" text NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"video_url" varchar(255) NOT NULL,
	"youtube_url" varchar(255) NOT NULL,
	"age_rating" integer NOT NULL,
	"duration" integer NOT NULL,
	"release_year" integer NOT NULL,
	"category" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "watchlist" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"movie_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_movie_id_movies_id_fk" FOREIGN KEY ("movie_id") REFERENCES "public"."movies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "title_idx" ON "movies" USING btree ("title");--> statement-breakpoint
CREATE INDEX "category_idx" ON "movies" USING btree ("category");--> statement-breakpoint
CREATE INDEX "release_year_idx" ON "movies" USING btree ("release_year");--> statement-breakpoint
CREATE INDEX "user_movie_idx" ON "watchlist" USING btree ("user_id","movie_id");--> statement-breakpoint
CREATE INDEX "movie_idx" ON "watchlist" USING btree ("movie_id");
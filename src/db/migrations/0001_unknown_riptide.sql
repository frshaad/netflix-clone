CREATE TABLE "show" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"overview" text NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"video_url" varchar(255) NOT NULL,
	"youtube_url" varchar(255) NOT NULL,
	"age_rating" integer NOT NULL,
	"release_year" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"seasons" integer NOT NULL,
	"episode_count" integer NOT NULL,
	"status" "show_status" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "watchlist_item" (
	"watchlist_user_id" varchar(255) NOT NULL,
	"media_id" integer NOT NULL,
	"media_type" "media_type" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "movies" RENAME TO "movie";--> statement-breakpoint
ALTER TABLE "watchlist" DROP CONSTRAINT "watchlist_movie_id_movies_id_fk";
--> statement-breakpoint
DROP INDEX "title_idx";--> statement-breakpoint
DROP INDEX "category_idx";--> statement-breakpoint
DROP INDEX "release_year_idx";--> statement-breakpoint
DROP INDEX "user_movie_idx";--> statement-breakpoint
DROP INDEX "movie_idx";--> statement-breakpoint
ALTER TABLE "watchlist" ADD PRIMARY KEY ("user_id");--> statement-breakpoint
ALTER TABLE "watchlist_item" ADD CONSTRAINT "watchlist_item_watchlist_user_id_watchlist_user_id_fk" FOREIGN KEY ("watchlist_user_id") REFERENCES "public"."watchlist"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "movie" DROP COLUMN "category";--> statement-breakpoint
ALTER TABLE "watchlist" DROP COLUMN "id";--> statement-breakpoint
ALTER TABLE "watchlist" DROP COLUMN "movie_id";
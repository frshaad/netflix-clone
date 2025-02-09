ALTER TABLE "watchlist_item" DROP CONSTRAINT "watchlist_item_watchlist_user_id_watchlist_user_id_fk";
--> statement-breakpoint
ALTER TABLE "watchlist_item" ADD CONSTRAINT "watchlist_item_watchlist_user_id_watchlist_user_id_fk" FOREIGN KEY ("watchlist_user_id") REFERENCES "public"."watchlist"("user_id") ON DELETE cascade ON UPDATE no action;
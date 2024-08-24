CREATE TABLE IF NOT EXISTS "applied_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"father_name" text NOT NULL,
	"cnic" bigint NOT NULL,
	"phone_number" bigint NOT NULL,
	"city" text NOT NULL,
	"email" text NOT NULL,
	"gender" text NOT NULL,
	"date_of_birth" date NOT NULL,
	"highest_qualification" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "otp_codes" (
	"email" text NOT NULL,
	"code" integer NOT NULL,
	"expiry_date" timestamp DEFAULT '2024-08-21 14:40:59.907' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"industry" varchar NOT NULL,
	"company_name" varchar NOT NULL,
	"years_of_experience" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "entrance_exam_result" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" text NOT NULL,
	"exam_date" date
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "applied_user" USING btree ("cnic","phone_number","email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_sort_id" ON "applied_user" USING btree ("id" DESC NULLS LAST);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "otp_codes_email_index" ON "otp_codes" USING btree ("email");
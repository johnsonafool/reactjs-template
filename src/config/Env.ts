import z from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.string(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

export const Env = envSchema.parse(import.meta.env);

export const getEnvIssues = (): z.ZodIssue[] | undefined => {
  const result = envSchema.safeParse(import.meta.env);
  if (!result.success) return result.error.issues;
};

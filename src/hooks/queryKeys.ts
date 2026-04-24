export const letterKeys = {
  all: ["letters"] as const,

  list: (userId: string) => [...letterKeys.all, userId] as const,
  detail: (id: string) => ["letter", id] as const,
  next: (userId?: string) => [...letterKeys.all, userId, "next"] as const,
  keyword: (keyword: string) => ["searchKeyword", keyword] as const,
};

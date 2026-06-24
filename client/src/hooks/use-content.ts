import { useMutation } from "@tanstack/react-query";
import { InsertContactRequest } from "@shared/schema";
import { SERVICES, TEAM_MEMBERS, POSTS } from "@/data/static-data";

// Services — static data, no API call needed
export function useServices() {
  return { data: SERVICES, isLoading: false, error: null };
}

export function useService(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug) ?? null;
  return { data: service, isLoading: false, error: null };
}

// Team — static data
export function useTeam() {
  return { data: TEAM_MEMBERS, isLoading: false, error: null };
}

export function useTeamMember(id: number) {
  const member = TEAM_MEMBERS.find((m) => m.id === id) ?? null;
  return { data: member, isLoading: false, error: null };
}

// Posts — static data
export function usePosts() {
  return { data: POSTS, isLoading: false, error: null };
}

export function usePost(slug: string) {
  const post = POSTS.find((p) => p.slug === slug) ?? null;
  return { data: post, isLoading: false, error: null };
}

// Contact Form — sends via mailto (no backend needed)
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const subject = encodeURIComponent(`Contact from ${data.name} - ${data.company || "ACG Website"}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "-"}\nCompany: ${data.company || "-"}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:murmankobaxidze@gmail.com,temuri.gvetadze@gmail.com,guramikobakhidze@gmail.com?subject=${subject}&body=${body}`;
      return { id: 0, ...data, createdAt: new Date() };
    },
  });
}

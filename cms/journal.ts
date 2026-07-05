export default {
  name: "journal",
  title: "Journal",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
    { name: "emotion_tag", title: "Emotion Tag", type: "string" },
    { name: "mood_level", title: "Mood Level", type: "number", validation: (Rule: any) => Rule.min(1).max(5) },
    { name: "date", title: "Date", type: "date" },
  ],
};

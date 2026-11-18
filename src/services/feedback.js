
const STORAGE_KEY = "deepak_prity_feedback";

export const getFeedback = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export const saveFeedback = (feedback) => {
  const existingFeedback = getFeedback();

  const updatedFeedback = [
    {
      id: Date.now(),
      ...feedback,
      createdAt: new Date().toISOString(),
    },
    ...existingFeedback,
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFeedback));

  return updatedFeedback;
};

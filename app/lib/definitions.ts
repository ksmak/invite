export type WeddingConfig = {
  groom: string;
  bride: string;
  owners: string;
  date: string;
  place: string;
};

export type InvitationConfig = {
  background?: string;
  foreground?: string;
  invitationText?: string;
  dateText?: string;
  date?: Date;
};

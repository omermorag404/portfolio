import colors from "../styles/colors";

export interface CardData {
  title: string;
  label: string;
  projectName: string;
  cardColor: string;
}

export const cardsData: CardData[] = [
  {
    title: "Product Designer",
    label: "Project",
    projectName: "Storybook redesign",
    cardColor: colors.action,
  },
  {
    title: "Product Manager",
    label: "Position",
    projectName: "New Talent Marketplace",
    cardColor: colors.yellow,
  },
  {
    title: "Product Designer",
    label: "Project",
    projectName: "New Talent Marketplace",
    cardColor: colors.yellow,
  },
  {
    title: "Product Designer",
    label: "Project",
    projectName: "New Talent Marketplace",
    cardColor: colors.yellow,
  },
];

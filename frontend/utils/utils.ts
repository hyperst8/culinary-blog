import React from "react";
import { Activity } from "@untitledui/icons";
import { AirFryerIcon } from "@/components/icons/AirFryerIcon";
import { KitchenCookerIcon } from "@/components/icons/KitchenCookerIcon";
import { RiceBowlIcon } from "@/components/icons/RiceBowlIcon";
import { PotNonStickIcon } from "@/components/icons/PotNonStickIcon";
import { MicrowaveIcon } from "@/components/icons/MicrowaveIcon";

/**
 * Returns the React element for the category icon based on its slug.
 * @param slug The category slug
 * @param className CSS classes to apply to the icon
 */
export const getIcon = (slug: string, className: string = "w-5 h-5") => {
  switch (slug) {
    case "airfryer":
      return React.createElement(AirFryerIcon, { className });
    case "jerngryte":
      return React.createElement(KitchenCookerIcon, { className });
    case "riskoker":
      return React.createElement(RiceBowlIcon, { className });
    case "stekepanne":
      return React.createElement(PotNonStickIcon, { className });
    case "mikro":
      return React.createElement(MicrowaveIcon, { className });
    default:
      return React.createElement(Activity, { className });
  }
};

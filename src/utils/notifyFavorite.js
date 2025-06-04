import { toast } from "react-toastify";

export function notifyFavorite(action, itemName) {
  if (action === "add") {
    toast.success(`"${itemName}" añadido a Favoritos ⭐`);
  } else if (action === "remove") {
    toast.info(`"${itemName}" removido de Favoritos ❌`);
  }
}

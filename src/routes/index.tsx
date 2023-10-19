import { Routes as Switch, Route } from "react-router-dom";
import { NotesPage } from "../pages/Notes";
import { Layout } from "../layout";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<NotesPage />} />
    </Switch>
  );
};

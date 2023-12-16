import { Button } from "@/components/ui/button";

import { postData } from "./seedDB.action";

export default function SeedDatabase() {
  return (
    <form action={postData} className="m-5">
      <Button type="submit">Submit</Button>
    </form>
  );
}

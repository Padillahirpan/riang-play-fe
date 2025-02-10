import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/types/type";
import { LogOut } from "lucide-react";

interface ProfileProps {
  profile?: User | null;
  onLogout: () => void;
}

export const ProfilePage = ({ profile, onLogout }: ProfileProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>~ ~ ~</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 rounded-md ">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{profile?.name}</p>
            <p className="text-sm text-muted-foreground">{profile?.email}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            onLogout();
          }}
          className="w-full"
          variant="secondary"
        >
          <LogOut /> Logout
        </Button>
      </CardFooter>
    </Card>
  );
};

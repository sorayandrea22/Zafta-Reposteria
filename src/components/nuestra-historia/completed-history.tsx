import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const CompletedHistory = () => {
  return (
    <Dialog>
      <DialogTrigger>Nuestra Historia Completa</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nuestra Historia Completa</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

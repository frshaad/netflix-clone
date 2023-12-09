import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
};

export default function VideoPlayerModal({
  age,
  changeState,
  duration,
  overview,
  release,
  state,
  title,
  youtubeUrl,
}: Props) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex items-center gap-x-2">
            <p>{release}</p>
            <p className="rounded border border-gray-200 px-1 py-0.5">{age}+</p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
}

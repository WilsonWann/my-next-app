import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FC } from "react"

type Props = {
  open: boolean
  closeDialog: () => void
  content: { [x: string]: string }
}

const MessageDialog: FC<Props> = ({ open, closeDialog, content }) => {

  return (
    <Dialog open={open} onOpenChange={closeDialog} >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>發送成功</DialogTitle>
          <DialogDescription>
            我們已收到您的訊息﹐將盡快為您服務﹐謝謝
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {
            Object.entries(content).map((([key, value], index) => (
              <div key={index} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={key} className="text-right">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Label>
                <Input id={key} value={value} className="col-span-3" disabled />
              </div>
            )))
          }
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MessageDialog
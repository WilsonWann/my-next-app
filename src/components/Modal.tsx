"use client"

import {
  Dialog,
  DialogOverlay,
  DialogContent
} from './ui/dialog'
import { useRouter } from "next/navigation"

const Modal = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter()

  const handelOpenChange = () => router.back()

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handelOpenChange}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden">
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

export default Modal
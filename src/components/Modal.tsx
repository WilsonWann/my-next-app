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
      <DialogOverlay className="bg-black opacity-70 fixed inset-0">
        <DialogContent className="overflow-y-hidden">
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

export default Modal
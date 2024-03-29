"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import { useModal } from "@/hooks/use-modal-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCcw, RefreshCw } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";



export const InviteModal = () => {
    const {isOpen,onClose,type}=useModal()
    const origin=useOrigin();
    const isModalOpen=isOpen && type==="invite";
     
    const inviteUrl=`${origin}`

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
            <DialogHeader className="pt-8 px-6">
                <DialogTitle className="text-2xl text-center font-bold">
                    Invite Friends
                </DialogTitle>
            </DialogHeader>
            <div className="p-6">
                <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                    server invite link
                </Label>
                <div className="flex items-center mt-2 gap-x-2">
                    <Input className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black
                    focus-visible:ring-offset-0"
                    value={inviteUrl}
                    />
                    <Button size="icon">
                        <Copy className="w-4 h-4"/>
                    </Button>
                </div>
                <Button 
                    variant="link"
                    size="sm"
                    className="text-xs text-zinc-500 mt-4"
                >
                    Generate a new link
                    <RefreshCw className="w-4 h-4 ml-2"/>
                </Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}


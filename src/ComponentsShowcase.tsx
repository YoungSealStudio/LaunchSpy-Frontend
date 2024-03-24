import UserAuthForm from './app/components/user-auth-form'
import { ResponsiveDialog } from './components/responsive/responsive-dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './components/ui/alert-dialog'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import useUserAuthForm from './hooks/use-user-auth-form'

function ComponentsShowcase() {
  const userAuthFormProps = useUserAuthForm()

  return (
    <div className="p-4 gap-4 flex ">
      <Card className="p-2 w-[400px]">
        <Accordion className="flex-1" collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <Card className="p-2 w-[400px]">
        <UserAuthForm {...userAuthFormProps} className="w-full" />
      </Card>

      <Card className="p-2 w-[400px]">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button>Open AlertDialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Card>

      <Card className="p-2 w-[400px]">
        Responsive Dialog <br />
        <ResponsiveDialog />
      </Card>
    </div>
  )
}

export default ComponentsShowcase

import UserAuthForm from './app/components/user-auth-form';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/ui/accordion';
import { Card } from './components/ui/card';
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
} from './components/ui/alert-dialog';

import useUserAuthForm from './hooks/use-user-auth-form';
import { Button } from './components/ui/button';
import { ResponsiveDialog } from './components/responsive/responsive-dialog';

function ComponentsShowcase() {
  const userAuthFormProps = useUserAuthForm();

  return (
    <div className='p-4 gap-4 flex '>
      <Card className='p-2 w-[400px]'>
        <Accordion type='single' collapsible className='flex-1'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <Card className='p-2 w-[400px]'>
        <UserAuthForm {...userAuthFormProps} className='w-full' />
      </Card>

      <Card className='p-2 w-[400px]'>
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

      <Card className='p-2 w-[400px]'>
        Responsive Dialog <br />
        <ResponsiveDialog />
      </Card>
    </div>
  );
}

export default ComponentsShowcase;

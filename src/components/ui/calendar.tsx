import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const today = new Date();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      modifiers={{
        today: (date) => date.toDateString() === today.toDateString(), // Highlight today
        past: (date) => date < new Date(today.setHours(0, 0, 0, 0)), // Past dates
      }}
      modifiersClassNames={{
        today: 'bg-grey-400 text-black rounded-full border-slate-600 border', // Highlight today's date
        past: 'text-gray-400', // Grey color for past dates
      }}
      className={cn('w-full', className)}
      classNames={{
        months:
          'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full ',
        month: 'space-y-4 md:w-full ',
        caption: 'flex justify-between pt-1 relative items-center border-b-2 ',
        caption_label: 'text-md font-medium px-4 py-2 ',
        nav: 'space-x-1 flex items-center ',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 border border-white pr-4 hover:opacity-100'
        ),
        nav_button_previous: 'absolute right-8',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex justify-around ',
        head_cell:
          'text-black text-[0.95rem] rounded-md w-8 font-normal text-[0.8rem] font-semibold ',
        row: 'flex w-full mt-2 ',
        cell: cn(
          'relative p-0 text-center w-full text-sm focus-within:relative focus-within:z-20  [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 rounded-full'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-grey-300 text-white rounded-full', // Styling for today's date
        day_outside:
          'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn('h-4 w-4', className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn('h-4 w-4', className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };


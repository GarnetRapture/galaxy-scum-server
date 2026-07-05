import React from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { cn } from "@/shared/utils/cn"

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, value, onClear, ...props }, ref) => (
    <div className="relative">
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      <Input ref={ref} value={value} className={cn("pl-10 pr-10", className)} {...props} />
      {value && onClear && (
        <button
          onClick={onClear}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
)
SearchBar.displayName = "SearchBar"

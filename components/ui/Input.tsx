
interface InputProps
{
    id?: string;
    value: string | number,
    name?: string,
    type?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    placeholder?: string,
    disabled?: boolean,
    error?: string
}

const Input = ({ id, type = "text", value, name, error, onChange, className, placeholder, disabled = false }: InputProps) => {
    return (
        <>
         <input
                 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  id={id}
                type={type} value={value} name={name} onChange={onChange}
                //  className={cn("w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent", className)} 
                placeholder={placeholder} disabled={disabled} 
                />
                 {
                error && (
                    <span className="text-xs text-red-500 mt-1">{error}</span>
                )
            }
        </>
    )
}

export default Input;
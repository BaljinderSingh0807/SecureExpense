interface ButtonProps {
    variant: 'primary' | 'secondary',
    text: string,
    size: 'small' | 'medium' | 'big'
}

const variantClasses = {
    'primary': 'bg-emerald-800 text-white hover:bg-emerald-900',
    'secondary': 'bg-emerald-300 text-emerald-900 hover:bg-emerald-400'
}

const sizeClasses = {
    'small': 'text-sm py-1 px-3',
    'medium': 'text-lg py-2 px-6',
    'big': 'text-2xl py-3 px-8'
}

export const Button = ({variant, text, size}: ButtonProps) => {
  return <button className={variantClasses[variant] + ' ' + sizeClasses[size] + ' rounded-md mx-3 font-semibold'}>
    {text}
  </button>
}

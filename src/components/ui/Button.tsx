import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: string;  // BUG #8 ANALYSIS: Overly restrictive TypeScript type
  // 
  // PROBLEM IDENTIFIED:
  //   The children prop is typed as 'string' which is too restrictive for a React component.
  //   This prevents the Button component from accepting React elements, fragments, or
  //   any non-string content, which is a common use case in modern React applications.
  //
  // CURRENT LIMITATION:
  //   - ✅ Works: <Button>Click me</Button>
  //   - ❌ Fails: <Button><ArrowRight size={20} /> Get Started</Button>
  //   - ❌ Fails: <Button>{icon} {text}</Button>
  //   - ❌ Fails: <Button><span>Custom</span> Content</Button>
  //
  // TYPE SYSTEM IMPACT:
  //   - TypeScript will throw errors when JSX elements are passed as children
  //   - Error message: "Type 'ReactElement' is not assignable to type 'string'"
  //   - This breaks type safety and developer experience
  //
  // WHY THIS IS A PROBLEM:
  //   1. Modern UI patterns often require buttons with icons, badges, or complex content
  //   2. The component implementation (line 40) already supports React.ReactNode via JSX
  //   3. The type definition doesn't match the actual runtime capability
  //   4. Forces developers to use workarounds or type assertions
  //
  // ROOT CAUSE:
  //   Developer was likely trying to enforce string-only buttons for simplicity or
  //   design consistency, but didn't account for common use cases like icon buttons,
  //   buttons with badges, or buttons containing formatted text with spans/strong tags.
  //
  // RECOMMENDED SOLUTION:
  //   Change line 7 from: children: string;
  //   To: children: React.ReactNode;
  //
  // REACT.REACTNODE BENEFITS:
  //   - Accepts: string, number, ReactElement, ReactFragment, ReactPortal, null, undefined
  //   - Standard React type for children props
  //   - Maintains type safety while allowing flexibility
  //   - Aligns with React best practices and common component patterns
  //
  // SEVERITY: Medium
  //   - Doesn't break runtime functionality (JSX accepts any children)
  //   - But causes TypeScript compilation errors
  //   - Limits component reusability and flexibility
  //   - Forces developers to bypass type checking or avoid using the component
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm",
    secondary: "bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 focus:ring-primary-500",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-400",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


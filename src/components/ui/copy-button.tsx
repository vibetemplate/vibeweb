'use client';

import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  variant?: 'ghost' | 'default' | 'destructive' | 'outline' | 'secondary' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
}

export function CopyButton({ 
  text, 
  variant = 'ghost', 
  size = 'sm', 
  className = '',
  children 
}: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={className}
    >
      {children || <Copy className="h-4 w-4" />}
    </Button>
  );
}
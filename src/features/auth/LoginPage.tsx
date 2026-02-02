import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth.tsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Shared/Navbar';
import FormErrorAlert from '@/components/Shared/states/FormErrorAlert';
import FieldErrorText from '@/components/Shared/states/FieldErrorText';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 客户端验证
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    
    setIsEmailValid(emailValid);
    setIsPasswordValid(passwordValid);
    
    if (!emailValid || !passwordValid) {
      setError('请检查输入信息是否正确');
      return;
    }
    
    setError('');
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message || '登录失败，请检查邮箱和密码');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">登录</CardTitle>
              <CardDescription>
                输入您的邮箱和密码以访问您的账户
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormErrorAlert message={error} />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(validateEmail(e.target.value));
                  }}
                  required
                  className={`mt-1 ${!isEmailValid ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                />
                <FieldErrorText message={!isEmailValid ? '请输入有效的邮箱地址' : undefined} />
              </div>
              <div>
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setIsPasswordValid(validatePassword(e.target.value));
                  }}
                  required
                  className={`mt-1 ${!isPasswordValid ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                />
                <FieldErrorText message={!isPasswordValid ? '密码长度至少6位' : undefined} />
              </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? '登录中...' : '登录'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

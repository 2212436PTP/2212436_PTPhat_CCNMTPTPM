"use client";
import { useActionState, useState } from "react";
import { sendContactMessage, ContactFormState } from "./actions";
import SubmitButton from "@/src/components/submit-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const initialState: ContactFormState = {
  success: false,
};

export default function ContactPage() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const [forceShowForm, setForceShowForm] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const showSuccess = state.success && !forceShowForm;

  function handleResetForm() {
    setForceShowForm(true);
    setFormKey((prev) => prev + 1);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Liên hệ</h1>
      <p className="text-gray-500 mb-8">
        Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi!
      </p>
      <Alert className="mb-6">
        <AlertTitle>Thông báo</AlertTitle>
        <AlertDescription>
          Thông tin bạn gửi sẽ chỉ được dùng để phản hồi liên hệ học tập và dự
          án.
        </AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Thông tin liên hệ */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:2212436@dlu.edu.vn"
                className="text-blue-600 hover:underline text-sm"
              >
                2212436@dlu.edu.vn
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://github.com/2212436PTP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                github.com/2212436PTP
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Địa chỉ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Form liên hệ */}
        <div className="md:col-span-2">
          {showSuccess ? (
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700">
                  Gửi thành công!
                </CardTitle>
                <CardDescription className="text-green-600">
                  Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  onClick={handleResetForm}
                  className="px-0"
                >
                  Gửi tin nhắn khác
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Gửi tin nhắn</CardTitle>
                <CardDescription>
                  Điền thông tin của bạn và nội dung bạn muốn trao đổi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  key={formKey}
                  action={formAction}
                  className="space-y-4"
                  onSubmit={() => setForceShowForm(false)}
                >
                  <div>
                    <Label htmlFor="name" className="mb-1">
                      Họ và tên
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ho va Ten"
                    />
                    {state.errors?.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-1">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                    />
                    {state.errors?.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="subject" className="mb-1">
                      Tiêu đề
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Chủ đề bạn muốn trao đổi"
                    />
                    {state.errors?.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {state.errors.subject[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message" className="mb-1">
                      Nội dung
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Viết nội dung tin nhắn..."
                      rows={5}
                    />
                    {state.errors?.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {state.errors.message[0]}
                      </p>
                    )}
                  </div>
                  <SubmitButton pendingText="Đang gửi..." size="lg">
                    Gửi tin nhắn
                  </SubmitButton>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

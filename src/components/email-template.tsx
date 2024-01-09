import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    email,
    message
}: EmailTemplateProps) => (
    <div>
        <h1>New message</h1>
        <div className='flex flex-col gap-2'>
            <p>Cliente: {firstName}</p>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
        </div>
    </div>
);

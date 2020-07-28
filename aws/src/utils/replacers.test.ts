import { split, removeReturnPath } from 'utils/replacers';
import { email, body, headers } from 'utils/test-email';

test('splits an email into headers and body', () => {
  expect(split(email)).toMatchObject({ body, headers });
});

test('removes return path', () => {
  const with = 
`
Date: Fri, 24 Jul 2020 02:57:41 +0000 (UTC)
Return-Path: <bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org>
Mime-Version: 1.0
`;
  const without =
`
Date: Fri, 24 Jul 2020 02:57:41 +0000 (UTC)
Mime-Version: 1.0
`;
  expect(removeReturnPath(with)).toBe(without);
});

test('removes sender', () => {
  const with = `
Date: Fri, 24 Jul 2020 02:57:41 +0000 (UTC)
Sender: Nicholas Chiang <b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org>
From: Tutorbook <team@tutorbook.org>
`;
`
Date: Fri, 24 Jul 2020 02:57:41 +0000 (UTC)
From: Tutorbook <team@tutorbook.org>
`;
  expect(removeSender(with)).toBe(without);
});

test('removes message ID', () => {
  const with =
`
Mime-Version: 1.0
Message-ID: <Zcj6AAJcQS6k83hCaEo0XQ@ismtpd0018p1las1.sendgrid.net>
Mail-Reply-To: Nicholas Chiang <b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org>
`;
  const without =
`
Mime-Version: 1.0
Mail-Reply-To: Nicholas Chiang <b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org>
`;
  expect(removeMessageId(with)).toBe(without);
});

test('removes DKIM signature', () => {
  const with =
`
Date: Fri, 24 Jul 2020 02:57:41 +0000 (UTC)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=tutorbook.org; h=content-type:from:mime-version:subject:reply-to:to; s=s1; bh=fQU/9j+HhI/jL77WtI5gY9HraayyBVAY3EQZIm5nmDg=; b=XYqqzoUX3zuwXXXBJzMYKSejAJoLdQeww/4klxzpuwIxu90mxUOGIDvq1Relbmbxqro5 bkwk7awrDF0g+ohkivb6jNlePU1oAzVPd+/xYSr6c1RsY4Fhe2yCzwF+3v2YGrqgD+LuyM LtfBryCW/CslQvySjVM9Ozpq3iUF0pwTY=
Return-Path: <bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org>
Mime-Version: 1.0
`;
  const without =
`
Date: Fri, 24 Jul 2020 02:57:41 +0000 (UTC)
Return-Path: <bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org>
Mime-Version: 1.0
`;
  expect(removeDKIM(with)).toBe(without);
});

/* prettier-ignore */

export const email =
`Delivered-To: team@tutorbook.org
Received: by 2002:ac2:5f4d:0:0:0:0:0 with SMTP id 13csp2077305lfz;
        Thu, 23 Jul 2020 19:57:42 -0700 (PDT)
X-Google-Smtp-Source: ABdhPJwM+fEW5/0kTX1zaUPNVmgX0Z40AKtNDiWJpBQILqyxT2365PO2zuSdjSK6TcmRcDI+UH4k
X-Received: by 2002:a17:906:c0ce:: with SMTP id bn14mr7388049ejb.129.1595559462321;
        Thu, 23 Jul 2020 19:57:42 -0700 (PDT)
ARC-Seal: i=1; a=rsa-sha256; t=1595559462; cv=none;
        d=google.com; s=arc-20160816;
        b=Jm8DkwSGHpZziy2JAGDVSBjBs8FXMq/SeZxyTwaDRZ2WaR8oWDhUOIRL4rAPdjwp12
         zgTED21bvQYnThc1PlkQkVc2UUZ04XJQ1H7o2XLeO2UhLiEB2Xt94lH61zVCI3RquKFx
         Piub83Ap+JYBeMnRWXyIT9DkvXq3b199F3dOaqUwuKfLGQPu+J9vuCghsHS4jgRBI8pe
         j4HmDjqQoKIzOPA8c3E7Ckcz4U9zbVZ59L3Hu5E7CMHJm3wuhBrEbnXrfkcBAaW1tBmZ
         DidWu4pbj5V+Kz4E93ehxZA2Xn+1nRrz/F7733Cf1Gd++AUv75NK3ThnCaUKc02Uz7+z
         Z83g==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
        h=to:reply-to:subject:mail-followup-to:mail-reply-to:message-id
         :mime-version:from:date:dkim-signature;
        bh=fQU/9j+HhI/jL77WtI5gY9HraayyBVAY3EQZIm5nmDg=;
        b=AuXQbnaQ9UzuVOA4IH2Jf6y5tMvHtvSu0emygC1dlhnrk8zHKVeVn2BL4/uZGvYYkH
         PsWv2KJd06NzugEb0V7nry81+LAcan5m3XVcjZJC2k815sz7+1OP3LeZSv6RgqDR4FiC
         lOUq6t6XO/vliKVEJ8cC0d2BzihayiGcD7fxroipjScJ45fySCEUWPlv7AOX8qK2cS06
         2kZrTXfemrqAwUMzrKep7GkqIltjZ8jI5JNndi6kTMo/P1VAYzCk2+lY27mii07yjXAQ
         9OBvGGc1hgRPS3A5oMCybpnXtdILsOwEvts1XNok192yXriWnFyjALvlOFgP9v8GqvFo
         Y18g==
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@tutorbook.org header.s=s1 header.b=XYqqzoUX;
       spf=pass (google.com: domain of bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org designates 167.89.17.173 as permitted sender) smtp.mailfrom="bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org"
Return-Path: <bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org>
Received: from xtrwkkxd.outbound-mail.sendgrid.net (xtrwkkxd.outbound-mail.sendgrid.net. [167.89.17.173])
        by mx.google.com with ESMTPS id e8si3172196edy.494.2020.07.23.19.57.41
        for <team@tutorbook.org>
        (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);
        Thu, 23 Jul 2020 19:57:42 -0700 (PDT)
Received-SPF: pass (google.com: domain of bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org designates 167.89.17.173 as permitted sender) client-ip=167.89.17.173;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@tutorbook.org header.s=s1 header.b=XYqqzoUX;
       spf=pass (google.com: domain of bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org designates 167.89.17.173 as permitted sender) smtp.mailfrom="bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org"
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=tutorbook.org; h=content-type:from:mime-version:subject:reply-to:to; s=s1; bh=fQU/9j+HhI/jL77WtI5gY9HraayyBVAY3EQZIm5nmDg=; b=XYqqzoUX3zuwXXXBJzMYKSejAJoLdQeww/4klxzpuwIxu90mxUOGIDvq1Relbmbxqro5 bkwk7awrDF0g+ohkivb6jNlePU1oAzVPd+/xYSr6c1RsY4Fhe2yCzwF+3v2YGrqgD+LuyM LtfBryCW/CslQvySjVM9Ozpq3iUF0pwTY=
Received: by filterdrecv-p3mdw1-75c584b9c6-jp7b2 with SMTP id filterdrecv-p3mdw1-75c584b9c6-jp7b2-18-5F1A4E25-1
        2020-07-24 02:57:41.046681151 +0000 UTC m=+2368081.558086464
Received: from MTU4ODU0NDI (unknown) by ismtpd0018p1las1.sendgrid.net (SG) with HTTP id Zcj6AAJcQS6k83hCaEo0XQ Fri, 24 Jul 2020 02:57:40.947 +0000 (UTC)
Content-Type: multipart/alternative; boundary=946695581a68500c1817480b2e5e4f97b0c7304290aa63f5f09d06c5b684
Date: Fri, 24 Jul 2020 02:57:41 +0000 (UTC)
From: Tutorbook <team@tutorbook.org>
Mime-Version: 1.0
Message-ID: <Zcj6AAJcQS6k83hCaEo0XQ@ismtpd0018p1las1.sendgrid.net>
Mail-Reply-To: Nicholas Chiang <b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org>
Mail-Followup-To: Andreas Erikkson <f2c1f04b-568f-47be-817c-98569a6d4174@mail.tutorbook.org>, Sasha Abraham <a7171cca-95a6-4d74-ba33-613793637671@mail.tutorbook.org>, Jennifer Eriksson <6fbff982-8a77-403a-b172-378753968266@mail.tutorbook.org>
Subject: New Study Skills appointment on Tutorbook.
Reply-To: Nicholas Chiang <b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org>
X-SG-EID: wbbPvghvZq1kFKKP1t4qPS5c2IgBumc7zzwpDfcVZtNi54dCvnsLrnOGV1sYhFb5mnyU1YVzmIC6K57229N/7mt9i93A/oCb58qT38nSLc9Qb6nBmEDApq0bW31fNdPGd2pl37CSjY+qZfQojI2exjDenKEYp9PY4ai6EuG5zRC3Pppp5tEs5yPJiJlo8g8TOiWi5+7WXmAZrefFhsQyRiXbcYbPpI+AqeTuSH2pr9nuVMTZvkJ5OhNWLVoAR3v1
To: Andreas Erikkson <f2c1f04b-568f-47be-817c-98569a6d4174@mail.tutorbook.org>, Sasha Abraham <a7171cca-95a6-4d74-ba33-613793637671@mail.tutorbook.org>, Jennifer Eriksson <6fbff982-8a77-403a-b172-378753968266@mail.tutorbook.org>
Bcc: Tutorbook <team@tutorbook.org>

--946695581a68500c1817480b2e5e4f97b0c7304290aa63f5f09d06c5b684
Content-Transfer-Encoding: quoted-printable
Content-Type: text/plain; charset=utf-8
Mime-Version: 1.0

Hi Andreas Erikkson, Sasha Abraham and Jennifer Eriksson,

You have a new tutoring lesson for Study Skills (with Andreas Erikkson as t=
he tutee, Sasha Abraham as the tutor and Jennifer Eriksson as the parent).

Please reply to this email with when you're available to join your first le=
sson. If you're a parent, no action is necessary (unless your student needs=
 your help to find a time).

Once you figure out a time when everyone's available, simply copy and paste=
 this URL into a new tab of your browser to open:

http://url9349.tutorbook.org/ls/click?upn=3DE6d-2F0VgnXPFxOJUdpFzdpoiO-2FQd=
t1O1KtkpPFktEIS-2FavwdeA9z2YK5sZeUoi3XNE7ie2Gzv-2BdV4OxQbhNOfDw-3D-3Dt4H0_G=
f6l-2Bbc9MyjFa0hlmRMq0CegMIL09WQ-2B2P87kTMoePCWcUCyOPI7wVNXF-2FPkctiOJ9-2BU=
eK7Rmnqtcih9CCYJplYyO4ddASkpe021tzD4eaZfxQFvt8P-2B2-2FhssAKGE-2Bf3bv-2B3Nu9=
mrgp-2BZpeBi2PFQNxxhU0FHcwNXklTkMHxdGeHQsrbwQZBwBY8u7ajfe6C8xKQAMrzmNf7Sa9I=
7nyDh9mrMYzQWVHv2KzAOmdlpCM-3D

Nicholas Chiang from Tutorbook set up this lesson:

> Andreas Eriksson was recommended to Tutorbook after chatting with John Mu=
ragu (an SJUSD counselor). Andreas needs help with executive functioning. H=
e prefers someone with knowledge on executive function (organization, motiv=
ation). Sasha's profile looked like a good fit (if she's up for it)! I'll l=
et you two take it from here (though feel free to ping me if you have quest=
ions).
> =E2=80=94Nicholas Chiang from Tutorbook=20

If this doesn't seem like a good match, please get in touch with Nicholas C=
hiang by using this email address:

b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org

Thank you.

Tutorbook - tutorbook.org
--946695581a68500c1817480b2e5e4f97b0c7304290aa63f5f09d06c5b684
Content-Transfer-Encoding: quoted-printable
Content-Type: text/html; charset=utf-8
Mime-Version: 1.0

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.=
w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html data-editor-version=3D"2" xmlns=3D"http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv=3D"Content-Type" content=3D"text/html;charset=3Dutf-8"=
 />
    <meta name=3D"viewport" content=3D"width=3Ddevice-width,initial-scale=
=3D1,minimum-scale=3D1,maximum-scale=3D1" /><!--[if !mso]><!-->
    <meta http-equiv=3D"X-UA-Compatible" content=3D"IE=3DEdge" /><!--<![end=
if]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <link href=3D"https://fonts.googleapis.com/css2?family=3DPoppins:wght@4=
00;600;800&display=3Dswap" rel=3D"stylesheet" type=3D"text/css">
  </head>
  <body>
    <table width=3D"100%" border=3D"0" cellspacing=3D"0" cellpadding=3D"0">
      <tbody>
        <tr>
          <td align=3D"center" style=3D"padding:0">
            <table width=3D"600" border=3D"0" cellspacing=3D"0" cellpadding=
=3D"40" style=3D"border:1px solid #eaeaea;border-radius:5px;margin:40px 0">
              <tbody>
                <tr>
                  <td align=3D"center" style=3D"padding:0">
                    <table width=3D"100%" border=3D"0" cellspacing=3D"0" ce=
llpadding=3D"0" style=3D"height:280px;background-image:url(https://assets.t=
utorbook.org/jpgs/tutor.jpg);background-size:cover;background-position:cent=
er;border-radius: 5px 5px 0 0;background-color:rgba(0, 0, 0, 0.25);backgrou=
nd-blend-mode:darken">
                      <tbody>
                        <tr>
                          <td align=3D"center" style=3D"padding:0">
                            <img width=3D"275" height=3D"48" alt=3D"Tutorbo=
ok" src=3D"https://assets.tutorbook.org/pngs/white-wordmark.png" style=3D"c=
olor:#FFFFFF;font-family:'Poppins','Google Sans',Arial,sans-serif;font-size=
:42px;font-weight:800">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style=3D"margin:40px;width:465px;text-align:left">
                     =20
                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Hi Andreas Erikk=
son, Sasha Abraham and Jennifer Eriksson,</p>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">You have a new t=
utoring lesson for Study Skills (with Andreas Erikkson as the tutee, Sasha =
Abraham as the tutor and Jennifer Eriksson as the parent).</p>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Please reply to =
this email with when you're available to join your first lesson. If you're =
a parent, no action is necessary (unless your student needs your help to fi=
nd a time).</p>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Once you figure =
out a time when everyone's available, simply click the button below to open=
 the lesson room:</p>
                     =20
                      <br>

                      <table width=3D"100%">
                        <tbody>
                          <tr>
                            <td align=3D"center" style=3D"padding:0">
                              <div>
                                <a href=3D"http://url9349.tutorbook.org/ls/=
click?upn=3DE6d-2F0VgnXPFxOJUdpFzdpoiO-2FQdt1O1KtkpPFktEIS-2FavwdeA9z2YK5sZ=
eUoi3XNG5U1XlMMpSC7vmeFrbelVA-3D-3Ddelq_Gf6l-2Bbc9MyjFa0hlmRMq0CegMIL09WQ-2=
B2P87kTMoePCWcUCyOPI7wVNXF-2FPkctiOVyFNtjCQzp8YphWGha2pMiSvaL7FSBS-2Fs0-2Bh=
OHld5gMnW-2F4nKUOg9zsXi9N9DtRvzhbcU00iCNVKiDuvKkS3UPEI-2FEo6PkQRviq34Cgc9xV=
PJiq7rTx8i1UTrfsaXIT-2B3o2tPHM359bSnn9gdeVbzCpBwcZyVV0vTIwEQZj0-2FiA-3D" st=
yle=3D"color:#FFFFFF!important;font-family:'Poppins','Google Sans',Arial,sa=
ns-serif;font-size:12px;line-height:50px;text-decoration:none;background-co=
lor:#000000;border-radius:5px;display:inline-block;font-weight:600;text-ali=
gn:center;width:200px">OPEN ROOM</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <br>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Or copy and past=
e this URL into a new tab of your browser:</p>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px"><a href=3D"http:=
//url9349.tutorbook.org/ls/click?upn=3DE6d-2F0VgnXPFxOJUdpFzdpoiO-2FQdt1O1K=
tkpPFktEIS-2FavwdeA9z2YK5sZeUoi3XNG5U1XlMMpSC7vmeFrbelVA-3D-3DS_IM_Gf6l-2Bb=
c9MyjFa0hlmRMq0CegMIL09WQ-2B2P87kTMoePCWcUCyOPI7wVNXF-2FPkctiO7KyI2cKhrvZtf=
Li9WjOI14g74isy71uq5C8AbUesyNMaTYs0jv6H8wtVzy35ygpuqsm0Ph8ZzGXriDxqXgzBzFex=
BnQZZ5viWZKU4Vh59ns0WrLWKuFJnsU8tplvpQq55PJOE5482rs8EuIWwabZJMklGvOM6ySVhqL=
-2B9UEGfGk-3D" style=3D"color:#067DF7!important;text-decoration:none">https=
://tutorbook.bramble.io/dyRqVnxPnP5086zQIhQf</a></p>

                      <br>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Nicholas Chiang =
from Tutorbook set up this lesson:</p>

                      <blockquote style=3D"margin:0;border-left:4px solid #=
a6a6a6;padding:0 0 0 24px;display:block;quotes:none">
                        <p style=3D"color:#474747;font-family:'Poppins','Go=
ogle Sans',Arial,sans-serif;font-size:14px;line-height:24px"><i>"Andreas Er=
iksson was recommended to Tutorbook after chatting with John Muragu (an SJU=
SD counselor). Andreas needs help with executive functioning. He prefers so=
meone with knowledge on executive function (organization, motivation). Sash=
a&#x27;s profile looked like a good fit (if she&#x27;s up for it)! I&#x27;l=
l let you two take it from here (though feel free to ping me if you have qu=
estions)."</i></p>
                        <cite style=3D"color:#474747;font-family:'Poppins',=
'Google Sans',Arial,sans-serif;font-size:14px;line-height:24px">=E2=80=94Ni=
cholas Chiang from Tutorbook</cite>
                      </blockquote>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">If this doesn't =
seem like a good match, please get in touch with Nicholas Chiang by using t=
he email address listed in the table below.</p>
                     =20
                      <br>
                     =20
                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">For easy communi=
cation, you can use these email addresses:</p>
                     =20
                      <div style=3D"border:1px solid #eaeaea;border-radius:=
5px">                   =20
                        <table style=3D"border-collapse:collapse;table-layo=
ut:fixed">
                          <thead>
                            <tr>
                              <th role=3D"columnheader" scope=3D"col" style=
=3D"color:#000000;font-family:'Poppins','Google Sans',Arial,sans-serif;font=
-weight:600;font-size:14px;line-height:24px;padding:24px 0 24px 24px">Name<=
/th>
                              <th role=3D"columnheader" scope=3D"col" style=
=3D"color:#000000;font-family:'Poppins','Google Sans',Arial,sans-serif;font=
-weight:600;font-size:14px;line-height:24px;padding:24px">Email</th>
                            </tr>
                          </thead>
                          <tbody>
                              <tr style=3D"border-top-color:#eaeaea;border-=
top-width:1px;border-top-style:solid">
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px 0 24px 24px">Andreas Erikkson</td>
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px"><a href=3D"mailto:%22Andreas%20Erikkson%22%3Cf2c1f04b-568f-47be-817=
c-98569a6d4174%40mail.tutorbook.org%3E" style=3D"color:#067DF7!important;te=
xt-decoration:none">f2c1f04b-568f-47be-817c-98569a6d4174@mail.tutorbook.org=
</a></td>
                              </tr>
                              <tr style=3D"border-top-color:#eaeaea;border-=
top-width:1px;border-top-style:solid">
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px 0 24px 24px">Sasha Abraham</td>
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px"><a href=3D"mailto:%22Sasha%20Abraham%22%3Ca7171cca-95a6-4d74-ba33-6=
13793637671%40mail.tutorbook.org%3E" style=3D"color:#067DF7!important;text-=
decoration:none">a7171cca-95a6-4d74-ba33-613793637671@mail.tutorbook.org</a=
></td>
                              </tr>
                              <tr style=3D"border-top-color:#eaeaea;border-=
top-width:1px;border-top-style:solid">
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px 0 24px 24px">Jennifer Eriksson</td>
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px"><a href=3D"mailto:%22Jennifer%20Eriksson%22%3C6fbff982-8a77-403a-b1=
72-378753968266%40mail.tutorbook.org%3E" style=3D"color:#067DF7!important;t=
ext-decoration:none">6fbff982-8a77-403a-b172-378753968266@mail.tutorbook.or=
g</a></td>
                              </tr>
                          </tbody>
                        </table>
                      </div>

                      <p></p>

                      <br>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Thank you.</p>

                      <hr style=3D"border:none;border-top:1px solid #EAEAEA=
;margin:26px 0;width:100%">
                     =20
                      <p style=3D"color:#666666;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:12px;line-height:24px">Tutorbook - <a h=
ref=3D"http://url9349.tutorbook.org/ls/click?upn=3DE6d-2F0VgnXPFxOJUdpFzdph=
n3ZLxE4tXHc6VFNdh8fOc-3Dwnzd_Gf6l-2Bbc9MyjFa0hlmRMq0CegMIL09WQ-2B2P87kTMoeP=
CWcUCyOPI7wVNXF-2FPkctiO7t8fsW2jUwMXDivGyNh9GXDf8sFtHK-2F1SdKGXzALl2Juxf48h=
O6zN9egmAWUi8u8G9MaEmYDK9uPazwtM5s011gJhXZPx4Y8mdHhoIiVTz-2BvIp580XiSq2MBkd=
mgGsHPTAUwTHK2cfmTMU0kL7R3bn-2Fq8gBKpfyDtjFIYvDi88Y-3D" style=3D"color:#067=
DF7!important;text-decoration:none">tutorbook.org</a></p>
                     =20
                      <p style=3D"color: #666666;font-family:'Poppins','Goo=
gle Sans',Arial,sans-serif;font-size:12px;line-height:24px">This email was =
sent to you because you have a visible profile on Tutorbook. You can edit o=
r remove your profile <a href=3D"http://url9349.tutorbook.org/ls/click?upn=
=3DE6d-2F0VgnXPFxOJUdpFzdpiNiEL1LaECbjOlzanxQHtvLbhTx57VxhQgcjzWvKcaDjGwF_G=
f6l-2Bbc9MyjFa0hlmRMq0CegMIL09WQ-2B2P87kTMoePCWcUCyOPI7wVNXF-2FPkctiO5kTOi-=
2F1pdGwz8Uq2KAOTdRBucubEWc2JuwnHXoB-2FB4hyNmVruekMb7Xu-2BRm0ZjXImQdRo6143l-=
2F9aR9Hn-2B7SxFMteYOHjbvyCJ-2BlutJLDPR3BXGtKyeONVXnkILysr-2FlC5jciL7BPQwj3A=
rNpt7BukDP7Y7-2FygRNkqJc92Pp87w-3D" style=3D"color:#067DF7!important;text-d=
ecoration:none">here</a>.</p>
                     =20
                      <p style=3D"color: #666666;font-family:'Poppins','Goo=
gle Sans',Arial,sans-serif;font-size:12px;line-height:24px">If this message=
 contains spam or unwanted messages let us know at <a href=3D"mailto:team@t=
utorbook.org" style=3D"color:#067DF7!important;text-decoration:none">team@t=
utorbook.org</a>.</p>
                   =20
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  <img src=3D"http://url9349.tutorbook.org/wf/open?upn=3DUVib40SQfl9nyX0kRK=
ThdM2xkBVDf44oXjnqyjCMW34lMRpSzzpHVEQg5-2FphlKTyud-2BBUP6GTqq21SUP8ZGUaeoq4=
HX658-2BeigXVtvtCE-2Fdgeet6zkBgM6gPc4hxmAuy7x0tJ9mjXvwY0lhZi6UGW0VjVmKpxU8Y=
e0LN-2Fwa20EqoVdF3ez8AI8Uel6zvX1wmxZLEinm9-2FkByN9z2N7JkZdSOQSYG-2BV-2FcysA=
GtWUc2kU-3D" alt=3D"" width=3D"1" height=3D"1" border=3D"0" style=3D"height=
:1px !important;width:1px !important;border-width:0 !important;margin-top:0=
 !important;margin-bottom:0 !important;margin-right:0 !important;margin-lef=
t:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding=
-right:0 !important;padding-left:0 !important;"/></body>
</html>

--946695581a68500c1817480b2e5e4f97b0c7304290aa63f5f09d06c5b684--`

export const headers =
`Delivered-To: team@tutorbook.org
Received: by 2002:ac2:5f4d:0:0:0:0:0 with SMTP id 13csp2077305lfz;
        Thu, 23 Jul 2020 19:57:42 -0700 (PDT)
X-Google-Smtp-Source: ABdhPJwM+fEW5/0kTX1zaUPNVmgX0Z40AKtNDiWJpBQILqyxT2365PO2zuSdjSK6TcmRcDI+UH4k
X-Received: by 2002:a17:906:c0ce:: with SMTP id bn14mr7388049ejb.129.1595559462321;
        Thu, 23 Jul 2020 19:57:42 -0700 (PDT)
ARC-Seal: i=1; a=rsa-sha256; t=1595559462; cv=none;
        d=google.com; s=arc-20160816;
        b=Jm8DkwSGHpZziy2JAGDVSBjBs8FXMq/SeZxyTwaDRZ2WaR8oWDhUOIRL4rAPdjwp12
         zgTED21bvQYnThc1PlkQkVc2UUZ04XJQ1H7o2XLeO2UhLiEB2Xt94lH61zVCI3RquKFx
         Piub83Ap+JYBeMnRWXyIT9DkvXq3b199F3dOaqUwuKfLGQPu+J9vuCghsHS4jgRBI8pe
         j4HmDjqQoKIzOPA8c3E7Ckcz4U9zbVZ59L3Hu5E7CMHJm3wuhBrEbnXrfkcBAaW1tBmZ
         DidWu4pbj5V+Kz4E93ehxZA2Xn+1nRrz/F7733Cf1Gd++AUv75NK3ThnCaUKc02Uz7+z
         Z83g==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
        h=to:reply-to:subject:mail-followup-to:mail-reply-to:message-id
         :mime-version:from:date:dkim-signature;
        bh=fQU/9j+HhI/jL77WtI5gY9HraayyBVAY3EQZIm5nmDg=;
        b=AuXQbnaQ9UzuVOA4IH2Jf6y5tMvHtvSu0emygC1dlhnrk8zHKVeVn2BL4/uZGvYYkH
         PsWv2KJd06NzugEb0V7nry81+LAcan5m3XVcjZJC2k815sz7+1OP3LeZSv6RgqDR4FiC
         lOUq6t6XO/vliKVEJ8cC0d2BzihayiGcD7fxroipjScJ45fySCEUWPlv7AOX8qK2cS06
         2kZrTXfemrqAwUMzrKep7GkqIltjZ8jI5JNndi6kTMo/P1VAYzCk2+lY27mii07yjXAQ
         9OBvGGc1hgRPS3A5oMCybpnXtdILsOwEvts1XNok192yXriWnFyjALvlOFgP9v8GqvFo
         Y18g==
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@tutorbook.org header.s=s1 header.b=XYqqzoUX;
       spf=pass (google.com: domain of bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org designates 167.89.17.173 as permitted sender) smtp.mailfrom="bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org"
Return-Path: <bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org>
Received: from xtrwkkxd.outbound-mail.sendgrid.net (xtrwkkxd.outbound-mail.sendgrid.net. [167.89.17.173])
        by mx.google.com with ESMTPS id e8si3172196edy.494.2020.07.23.19.57.41
        for <team@tutorbook.org>
        (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);
        Thu, 23 Jul 2020 19:57:42 -0700 (PDT)
Received-SPF: pass (google.com: domain of bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org designates 167.89.17.173 as permitted sender) client-ip=167.89.17.173;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@tutorbook.org header.s=s1 header.b=XYqqzoUX;
       spf=pass (google.com: domain of bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org designates 167.89.17.173 as permitted sender) smtp.mailfrom="bounces+15885442-ab75-team=tutorbook.org@em9010.tutorbook.org"
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=tutorbook.org; h=content-type:from:mime-version:subject:reply-to:to; s=s1; bh=fQU/9j+HhI/jL77WtI5gY9HraayyBVAY3EQZIm5nmDg=; b=XYqqzoUX3zuwXXXBJzMYKSejAJoLdQeww/4klxzpuwIxu90mxUOGIDvq1Relbmbxqro5 bkwk7awrDF0g+ohkivb6jNlePU1oAzVPd+/xYSr6c1RsY4Fhe2yCzwF+3v2YGrqgD+LuyM LtfBryCW/CslQvySjVM9Ozpq3iUF0pwTY=
Received: by filterdrecv-p3mdw1-75c584b9c6-jp7b2 with SMTP id filterdrecv-p3mdw1-75c584b9c6-jp7b2-18-5F1A4E25-1
        2020-07-24 02:57:41.046681151 +0000 UTC m=+2368081.558086464
Received: from MTU4ODU0NDI (unknown) by ismtpd0018p1las1.sendgrid.net (SG) with HTTP id Zcj6AAJcQS6k83hCaEo0XQ Fri, 24 Jul 2020 02:57:40.947 +0000 (UTC)
Content-Type: multipart/alternative; boundary=946695581a68500c1817480b2e5e4f97b0c7304290aa63f5f09d06c5b684
Date: Fri, 24 Jul 2020 02:57:41 +0000 (UTC)
From: Tutorbook <team@tutorbook.org>
Mime-Version: 1.0
Message-ID: <Zcj6AAJcQS6k83hCaEo0XQ@ismtpd0018p1las1.sendgrid.net>
Mail-Reply-To: Nicholas Chiang <b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org>
Mail-Followup-To: Andreas Erikkson <f2c1f04b-568f-47be-817c-98569a6d4174@mail.tutorbook.org>, Sasha Abraham <a7171cca-95a6-4d74-ba33-613793637671@mail.tutorbook.org>, Jennifer Eriksson <6fbff982-8a77-403a-b172-378753968266@mail.tutorbook.org>
Subject: New Study Skills appointment on Tutorbook.
Reply-To: Nicholas Chiang <b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org>
X-SG-EID: wbbPvghvZq1kFKKP1t4qPS5c2IgBumc7zzwpDfcVZtNi54dCvnsLrnOGV1sYhFb5mnyU1YVzmIC6K57229N/7mt9i93A/oCb58qT38nSLc9Qb6nBmEDApq0bW31fNdPGd2pl37CSjY+qZfQojI2exjDenKEYp9PY4ai6EuG5zRC3Pppp5tEs5yPJiJlo8g8TOiWi5+7WXmAZrefFhsQyRiXbcYbPpI+AqeTuSH2pr9nuVMTZvkJ5OhNWLVoAR3v1
To: Andreas Erikkson <f2c1f04b-568f-47be-817c-98569a6d4174@mail.tutorbook.org>, Sasha Abraham <a7171cca-95a6-4d74-ba33-613793637671@mail.tutorbook.org>, Jennifer Eriksson <6fbff982-8a77-403a-b172-378753968266@mail.tutorbook.org>
Bcc: Tutorbook <team@tutorbook.org>
`

export const body =
`
--946695581a68500c1817480b2e5e4f97b0c7304290aa63f5f09d06c5b684
Content-Transfer-Encoding: quoted-printable
Content-Type: text/plain; charset=utf-8
Mime-Version: 1.0

Hi Andreas Erikkson, Sasha Abraham and Jennifer Eriksson,

You have a new tutoring lesson for Study Skills (with Andreas Erikkson as t=
he tutee, Sasha Abraham as the tutor and Jennifer Eriksson as the parent).

Please reply to this email with when you're available to join your first le=
sson. If you're a parent, no action is necessary (unless your student needs=
 your help to find a time).

Once you figure out a time when everyone's available, simply copy and paste=
 this URL into a new tab of your browser to open:

http://url9349.tutorbook.org/ls/click?upn=3DE6d-2F0VgnXPFxOJUdpFzdpoiO-2FQd=
t1O1KtkpPFktEIS-2FavwdeA9z2YK5sZeUoi3XNE7ie2Gzv-2BdV4OxQbhNOfDw-3D-3Dt4H0_G=
f6l-2Bbc9MyjFa0hlmRMq0CegMIL09WQ-2B2P87kTMoePCWcUCyOPI7wVNXF-2FPkctiOJ9-2BU=
eK7Rmnqtcih9CCYJplYyO4ddASkpe021tzD4eaZfxQFvt8P-2B2-2FhssAKGE-2Bf3bv-2B3Nu9=
mrgp-2BZpeBi2PFQNxxhU0FHcwNXklTkMHxdGeHQsrbwQZBwBY8u7ajfe6C8xKQAMrzmNf7Sa9I=
7nyDh9mrMYzQWVHv2KzAOmdlpCM-3D

Nicholas Chiang from Tutorbook set up this lesson:

> Andreas Eriksson was recommended to Tutorbook after chatting with John Mu=
ragu (an SJUSD counselor). Andreas needs help with executive functioning. H=
e prefers someone with knowledge on executive function (organization, motiv=
ation). Sasha's profile looked like a good fit (if she's up for it)! I'll l=
et you two take it from here (though feel free to ping me if you have quest=
ions).
> =E2=80=94Nicholas Chiang from Tutorbook=20

If this doesn't seem like a good match, please get in touch with Nicholas C=
hiang by using this email address:

b7ed261c-1ab1-4ee3-ba7b-3f3335e5399c@mail.tutorbook.org

Thank you.

Tutorbook - tutorbook.org
--946695581a68500c1817480b2e5e4f97b0c7304290aa63f5f09d06c5b684
Content-Transfer-Encoding: quoted-printable
Content-Type: text/html; charset=utf-8
Mime-Version: 1.0

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.=
w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html data-editor-version=3D"2" xmlns=3D"http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv=3D"Content-Type" content=3D"text/html;charset=3Dutf-8"=
 />
    <meta name=3D"viewport" content=3D"width=3Ddevice-width,initial-scale=
=3D1,minimum-scale=3D1,maximum-scale=3D1" /><!--[if !mso]><!-->
    <meta http-equiv=3D"X-UA-Compatible" content=3D"IE=3DEdge" /><!--<![end=
if]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <link href=3D"https://fonts.googleapis.com/css2?family=3DPoppins:wght@4=
00;600;800&display=3Dswap" rel=3D"stylesheet" type=3D"text/css">
  </head>
  <body>
    <table width=3D"100%" border=3D"0" cellspacing=3D"0" cellpadding=3D"0">
      <tbody>
        <tr>
          <td align=3D"center" style=3D"padding:0">
            <table width=3D"600" border=3D"0" cellspacing=3D"0" cellpadding=
=3D"40" style=3D"border:1px solid #eaeaea;border-radius:5px;margin:40px 0">
              <tbody>
                <tr>
                  <td align=3D"center" style=3D"padding:0">
                    <table width=3D"100%" border=3D"0" cellspacing=3D"0" ce=
llpadding=3D"0" style=3D"height:280px;background-image:url(https://assets.t=
utorbook.org/jpgs/tutor.jpg);background-size:cover;background-position:cent=
er;border-radius: 5px 5px 0 0;background-color:rgba(0, 0, 0, 0.25);backgrou=
nd-blend-mode:darken">
                      <tbody>
                        <tr>
                          <td align=3D"center" style=3D"padding:0">
                            <img width=3D"275" height=3D"48" alt=3D"Tutorbo=
ok" src=3D"https://assets.tutorbook.org/pngs/white-wordmark.png" style=3D"c=
olor:#FFFFFF;font-family:'Poppins','Google Sans',Arial,sans-serif;font-size=
:42px;font-weight:800">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style=3D"margin:40px;width:465px;text-align:left">
                     =20
                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Hi Andreas Erikk=
son, Sasha Abraham and Jennifer Eriksson,</p>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">You have a new t=
utoring lesson for Study Skills (with Andreas Erikkson as the tutee, Sasha =
Abraham as the tutor and Jennifer Eriksson as the parent).</p>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Please reply to =
this email with when you're available to join your first lesson. If you're =
a parent, no action is necessary (unless your student needs your help to fi=
nd a time).</p>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Once you figure =
out a time when everyone's available, simply click the button below to open=
 the lesson room:</p>
                     =20
                      <br>

                      <table width=3D"100%">
                        <tbody>
                          <tr>
                            <td align=3D"center" style=3D"padding:0">
                              <div>
                                <a href=3D"http://url9349.tutorbook.org/ls/=
click?upn=3DE6d-2F0VgnXPFxOJUdpFzdpoiO-2FQdt1O1KtkpPFktEIS-2FavwdeA9z2YK5sZ=
eUoi3XNG5U1XlMMpSC7vmeFrbelVA-3D-3Ddelq_Gf6l-2Bbc9MyjFa0hlmRMq0CegMIL09WQ-2=
B2P87kTMoePCWcUCyOPI7wVNXF-2FPkctiOVyFNtjCQzp8YphWGha2pMiSvaL7FSBS-2Fs0-2Bh=
OHld5gMnW-2F4nKUOg9zsXi9N9DtRvzhbcU00iCNVKiDuvKkS3UPEI-2FEo6PkQRviq34Cgc9xV=
PJiq7rTx8i1UTrfsaXIT-2B3o2tPHM359bSnn9gdeVbzCpBwcZyVV0vTIwEQZj0-2FiA-3D" st=
yle=3D"color:#FFFFFF!important;font-family:'Poppins','Google Sans',Arial,sa=
ns-serif;font-size:12px;line-height:50px;text-decoration:none;background-co=
lor:#000000;border-radius:5px;display:inline-block;font-weight:600;text-ali=
gn:center;width:200px">OPEN ROOM</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <br>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Or copy and past=
e this URL into a new tab of your browser:</p>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px"><a href=3D"http:=
//url9349.tutorbook.org/ls/click?upn=3DE6d-2F0VgnXPFxOJUdpFzdpoiO-2FQdt1O1K=
tkpPFktEIS-2FavwdeA9z2YK5sZeUoi3XNG5U1XlMMpSC7vmeFrbelVA-3D-3DS_IM_Gf6l-2Bb=
c9MyjFa0hlmRMq0CegMIL09WQ-2B2P87kTMoePCWcUCyOPI7wVNXF-2FPkctiO7KyI2cKhrvZtf=
Li9WjOI14g74isy71uq5C8AbUesyNMaTYs0jv6H8wtVzy35ygpuqsm0Ph8ZzGXriDxqXgzBzFex=
BnQZZ5viWZKU4Vh59ns0WrLWKuFJnsU8tplvpQq55PJOE5482rs8EuIWwabZJMklGvOM6ySVhqL=
-2B9UEGfGk-3D" style=3D"color:#067DF7!important;text-decoration:none">https=
://tutorbook.bramble.io/dyRqVnxPnP5086zQIhQf</a></p>

                      <br>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Nicholas Chiang =
from Tutorbook set up this lesson:</p>

                      <blockquote style=3D"margin:0;border-left:4px solid #=
a6a6a6;padding:0 0 0 24px;display:block;quotes:none">
                        <p style=3D"color:#474747;font-family:'Poppins','Go=
ogle Sans',Arial,sans-serif;font-size:14px;line-height:24px"><i>"Andreas Er=
iksson was recommended to Tutorbook after chatting with John Muragu (an SJU=
SD counselor). Andreas needs help with executive functioning. He prefers so=
meone with knowledge on executive function (organization, motivation). Sash=
a&#x27;s profile looked like a good fit (if she&#x27;s up for it)! I&#x27;l=
l let you two take it from here (though feel free to ping me if you have qu=
estions)."</i></p>
                        <cite style=3D"color:#474747;font-family:'Poppins',=
'Google Sans',Arial,sans-serif;font-size:14px;line-height:24px">=E2=80=94Ni=
cholas Chiang from Tutorbook</cite>
                      </blockquote>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">If this doesn't =
seem like a good match, please get in touch with Nicholas Chiang by using t=
he email address listed in the table below.</p>
                     =20
                      <br>
                     =20
                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">For easy communi=
cation, you can use these email addresses:</p>
                     =20
                      <div style=3D"border:1px solid #eaeaea;border-radius:=
5px">                   =20
                        <table style=3D"border-collapse:collapse;table-layo=
ut:fixed">
                          <thead>
                            <tr>
                              <th role=3D"columnheader" scope=3D"col" style=
=3D"color:#000000;font-family:'Poppins','Google Sans',Arial,sans-serif;font=
-weight:600;font-size:14px;line-height:24px;padding:24px 0 24px 24px">Name<=
/th>
                              <th role=3D"columnheader" scope=3D"col" style=
=3D"color:#000000;font-family:'Poppins','Google Sans',Arial,sans-serif;font=
-weight:600;font-size:14px;line-height:24px;padding:24px">Email</th>
                            </tr>
                          </thead>
                          <tbody>
                              <tr style=3D"border-top-color:#eaeaea;border-=
top-width:1px;border-top-style:solid">
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px 0 24px 24px">Andreas Erikkson</td>
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px"><a href=3D"mailto:%22Andreas%20Erikkson%22%3Cf2c1f04b-568f-47be-817=
c-98569a6d4174%40mail.tutorbook.org%3E" style=3D"color:#067DF7!important;te=
xt-decoration:none">f2c1f04b-568f-47be-817c-98569a6d4174@mail.tutorbook.org=
</a></td>
                              </tr>
                              <tr style=3D"border-top-color:#eaeaea;border-=
top-width:1px;border-top-style:solid">
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px 0 24px 24px">Sasha Abraham</td>
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px"><a href=3D"mailto:%22Sasha%20Abraham%22%3Ca7171cca-95a6-4d74-ba33-6=
13793637671%40mail.tutorbook.org%3E" style=3D"color:#067DF7!important;text-=
decoration:none">a7171cca-95a6-4d74-ba33-613793637671@mail.tutorbook.org</a=
></td>
                              </tr>
                              <tr style=3D"border-top-color:#eaeaea;border-=
top-width:1px;border-top-style:solid">
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px 0 24px 24px">Jennifer Eriksson</td>
                                <td style=3D"color:#000000;font-family:'Pop=
pins','Google Sans',Arial,sans-serif;font-size:14px;line-height:24px;paddin=
g:24px"><a href=3D"mailto:%22Jennifer%20Eriksson%22%3C6fbff982-8a77-403a-b1=
72-378753968266%40mail.tutorbook.org%3E" style=3D"color:#067DF7!important;t=
ext-decoration:none">6fbff982-8a77-403a-b172-378753968266@mail.tutorbook.or=
g</a></td>
                              </tr>
                          </tbody>
                        </table>
                      </div>

                      <p></p>

                      <br>

                      <p style=3D"color:#000000;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:14px;line-height:24px">Thank you.</p>

                      <hr style=3D"border:none;border-top:1px solid #EAEAEA=
;margin:26px 0;width:100%">
                     =20
                      <p style=3D"color:#666666;font-family:'Poppins','Goog=
le Sans',Arial,sans-serif;font-size:12px;line-height:24px">Tutorbook - <a h=
ref=3D"http://url9349.tutorbook.org/ls/click?upn=3DE6d-2F0VgnXPFxOJUdpFzdph=
n3ZLxE4tXHc6VFNdh8fOc-3Dwnzd_Gf6l-2Bbc9MyjFa0hlmRMq0CegMIL09WQ-2B2P87kTMoeP=
CWcUCyOPI7wVNXF-2FPkctiO7t8fsW2jUwMXDivGyNh9GXDf8sFtHK-2F1SdKGXzALl2Juxf48h=
O6zN9egmAWUi8u8G9MaEmYDK9uPazwtM5s011gJhXZPx4Y8mdHhoIiVTz-2BvIp580XiSq2MBkd=
mgGsHPTAUwTHK2cfmTMU0kL7R3bn-2Fq8gBKpfyDtjFIYvDi88Y-3D" style=3D"color:#067=
DF7!important;text-decoration:none">tutorbook.org</a></p>
                     =20
                      <p style=3D"color: #666666;font-family:'Poppins','Goo=
gle Sans',Arial,sans-serif;font-size:12px;line-height:24px">This email was =
sent to you because you have a visible profile on Tutorbook. You can edit o=
r remove your profile <a href=3D"http://url9349.tutorbook.org/ls/click?upn=
=3DE6d-2F0VgnXPFxOJUdpFzdpiNiEL1LaECbjOlzanxQHtvLbhTx57VxhQgcjzWvKcaDjGwF_G=
f6l-2Bbc9MyjFa0hlmRMq0CegMIL09WQ-2B2P87kTMoePCWcUCyOPI7wVNXF-2FPkctiO5kTOi-=
2F1pdGwz8Uq2KAOTdRBucubEWc2JuwnHXoB-2FB4hyNmVruekMb7Xu-2BRm0ZjXImQdRo6143l-=
2F9aR9Hn-2B7SxFMteYOHjbvyCJ-2BlutJLDPR3BXGtKyeONVXnkILysr-2FlC5jciL7BPQwj3A=
rNpt7BukDP7Y7-2FygRNkqJc92Pp87w-3D" style=3D"color:#067DF7!important;text-d=
ecoration:none">here</a>.</p>
                     =20
                      <p style=3D"color: #666666;font-family:'Poppins','Goo=
gle Sans',Arial,sans-serif;font-size:12px;line-height:24px">If this message=
 contains spam or unwanted messages let us know at <a href=3D"mailto:team@t=
utorbook.org" style=3D"color:#067DF7!important;text-decoration:none">team@t=
utorbook.org</a>.</p>
                   =20
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  <img src=3D"http://url9349.tutorbook.org/wf/open?upn=3DUVib40SQfl9nyX0kRK=
ThdM2xkBVDf44oXjnqyjCMW34lMRpSzzpHVEQg5-2FphlKTyud-2BBUP6GTqq21SUP8ZGUaeoq4=
HX658-2BeigXVtvtCE-2Fdgeet6zkBgM6gPc4hxmAuy7x0tJ9mjXvwY0lhZi6UGW0VjVmKpxU8Y=
e0LN-2Fwa20EqoVdF3ez8AI8Uel6zvX1wmxZLEinm9-2FkByN9z2N7JkZdSOQSYG-2BV-2FcysA=
GtWUc2kU-3D" alt=3D"" width=3D"1" height=3D"1" border=3D"0" style=3D"height=
:1px !important;width:1px !important;border-width:0 !important;margin-top:0=
 !important;margin-bottom:0 !important;margin-right:0 !important;margin-lef=
t:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding=
-right:0 !important;padding-left:0 !important;"/></body>
</html>

`

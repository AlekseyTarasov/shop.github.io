---
layout: home
title: Checkout
description:
permalink: /checkout/
---

<form method="post" action="/">
  <label>First Name</label>
  <input type="text" name="First Name">

  <label>Last Name</label>
  <input type="text" name="Last Name">

  <label>Email Address</label>
  <input type="text" name="Email">

  <label>Mailing Address</label>
  <input type="text" name="Street" placeholder="Street">
  <input type="text" name="City" placeholder="City">
  <input type="text" name="State" placeholder="State">
  <input type="text" name="Zip Code" placeholder="Zip Code">

  <input type="hidden" name="_to" value="brad@bradonomics.com,zine@webniyom.com">
  <input type="text" name="_gotcha" style="display: none;">

  <input type="submit" value="Send Order">
</form>


<form action="https://formspree.io/email@domain.tld" method="POST" />
  <input type="text" name="name">
  <input type="email" name="_replyto">
  <input type="submit" value="Send">
</form>






<div class="simpleCart_items"></div>

Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты.

<form method="POST" class="checkout-form">
  <div class="checkout-f">
    <label>Имя</label>
    <input type='text' name='firstname' required/>
  </div>

  <div class="checkout-l">
    <label>Фамилия</label>
    <input type='text' name='lastname' required/>
  </div>

  <div class="checkout-e">
    <label>Email</label>
    <input type='email' name='email' required/>
  </div>

  <div class="checkout-p">
    <label>Телефон</label>
    <input type='tel' name='phone' required/>
  </div>

  <div class="checkout-m">
    <label>Oтзыв</label>
    <textarea name='content' required rows="5"></textarea>
  </div>
  <div class="item_add">
   <a href="javascript:;" class="simpleCart_checkout">Оформить Заказ</a>
  </div>
</form><!-- /end checkout-form -->

<a href="javascript:;" class="simpleCart_empty">empty cart</a>
<p>Всего <span class="simpleCart_total"></span></p>

export interface Rating{
  rate: number
  count: number
}

export interface Product{ 
id: number;
title: string;
category: string;
price: string;
description: string ;
image: string;
rating: Rating;

}
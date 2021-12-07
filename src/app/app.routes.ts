import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
/*	FruitproductsComponent,
	FruitbannerComponent,
	FruitbannerboxComponent,
	FruitcestaComponent,
	FruitfooterComponent,
	FruittopbarComponent,
	FruitcartComponent,*/
	PagoComponent,
	CheckoutComponent,
	PrincipalComponent,
	ShadibannerComponent,
	ShadibestsellerComponent,
	ShadidiscountComponent,
	ShadifooterComponent,
	ShadimostwantedComponent,
	ShadisliderComponent,
	ShaditopComponent,
	ShadishopComponent,
	ContactComponent,
	CartComponent,
	CompraComponent,
	GraciasComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'shadibanner',component:ShadibannerComponent},
	{path:'shadibestseller',component:ShadibestsellerComponent},
	{path:'shadidiscount',component:ShadidiscountComponent},
	{path:'shadifooter',component:ShadifooterComponent},
	{path:'shadimostwanted',component:ShadimostwantedComponent},
	{path:'shadislider',component:ShadisliderComponent},
	{path:'shaditop',component:ShaditopComponent},
	{path:'shop',component:ShadishopComponent},
	{path:'cart/:id',component:CartComponent},
	{path:'contact',component:ContactComponent},
	{path:'checkout',component:CheckoutComponent},
	{path:'compra',component:CompraComponent},
	{path:'gracias',component:GraciasComponent},
/*	{path:'fruittopbar',component:FruittopbarComponent},
	{path:'fruitproducts',component:FruitproductsComponent},
	{path:'fruitbanner',component:FruitbannerComponent},
	{path:'fruitbannerbox',component:FruitbannerboxComponent},
	{path:'fruitcesta',component:FruitcestaComponent},
	{path:'fruitfooter',component:FruitfooterComponent},
	{path:'fruitcart',component:FruitcartComponent},*/
	{path:'pago',component:PagoComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);


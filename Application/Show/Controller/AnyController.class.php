<?php
namespace Show\Controller;
use Common\Controller\HomeBaseController;
/**
 * 商城首页Controller
 */
class AnyController extends HomeBaseController{
	/**
	 * 首页
	 */
	public function index(){    
        $this->display();   
	}

	public function nav(){
		$site=M('nav_site');
		$data=$site
		->join('mysite_nav_site_catalog ON mysite_nav_site.pid = mysite_nav_site_catalog.id')
		->select();
		//$catalogname=M('nav_site_catalogname')
		//$data=$obj->select();
		//$catalogname=M('nav_site_catalogname')->select();
		$assign=array(
			'data'=>$data
			);
		$this->assign($assign);
       	$this->display();
	}

}


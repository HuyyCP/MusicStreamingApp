import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final authMethodsViewModel = ChangeNotifierProvider<AuthMethodsViewModel>(
  (ref) => AuthMethodsViewModel()
);

class AuthMethodsViewModel extends ChangeNotifier{

  void loginWithGoogle() {

  }
  
  void loginWithFacebook() {

  }

}
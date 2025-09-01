// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/// This example demonstrates a basic use of a shared greeting.
/// Rules:
/// - one global Greeting object is created at module publication
/// - everyone can update the text of the Greeting object
module hello_world::greeting_with_events {
  use sui::event;
  use std::string;

  /// A shared greeting.
  public struct Greeting has key {
    id: UID,
    text: string::String,
  }

  /// Event emitted when the Greeting object's text field is modified. 
  public struct GreetingTextUpdated has copy, drop {
    updater: address, 
    previous_text: string::String, 
    new_text: string::String
  }

  /// Called automatically once when this module is published. 
  /// Creates a globally shared Greeting object initialized with "Hello world!"
  fun init(ctx: &mut TxContext) { 
    let new_greeting = Greeting { 
      id: object::new(ctx),
      text: b"Hello world!".to_string()
    };
    transfer::share_object(new_greeting);
  }

  /// API call that updates text of Greeting object and emits an update event
  public fun update_text(greeting: &mut Greeting, new_text: string::String, ctx: &TxContext) {
    event::emit(GreetingTextUpdated {
      updater: ctx.sender(),
      previous_text: copy greeting.text,
      new_text: copy new_text,
    });

    greeting.text = new_text;
  }
}
